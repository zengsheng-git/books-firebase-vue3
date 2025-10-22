/* eslint-disable no-undef */

const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp() // 初始化 Firebase Admin SDK
const cors = require('cors')({ origin: true })

exports.helloWorldCors = functions.https.onRequest((request, response) => {
    // 使用cors中间件处理跨域请求
    cors(request, response, () => {
        response.send('Hello from Firebase!')
    })
})

/**
 * 云函数：统计 Firestore 中 "items" 集合的文档总数
 * 访问地址：https://us-central1-<项目ID>.cloudfunctions.net/countItems
 */
exports.countItems = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        try {
            // 对 "items" 集合执行 count() 聚合查询（服务端计算）
            const countSnapshot = await admin.firestore().collection('items').count().get() // 注意：count() 后需调用 get() 触发查询

            const total = countSnapshot.data().count // 从结果中提取计数
            res.status(200).json({ totalItems: total }) // 返回 JSON 格式的统计结果
        } catch (error) {
            console.error('统计失败：', error)
            res.status(500).send('Internal Server Error') // 处理异常
        }
    })
})

/**
 * 云函数：获取 Firebase Authentication 所有用户信息（分页拉取，返回精简字段）
 * 访问地址：https://<region>-<项目ID>.cloudfunctions.net/getAllAuthUsers
 * 注意：若用户量很大，响应体会很大。生产环境建议分页或仅返回必要字段。
 */
exports.getAllAuthUsers = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        try {
            // 仅允许 GET
            if (req.method !== 'GET') {
                res.status(405).json({ error: 'Method Not Allowed' })
                return
            }

            // 可选：限制每次分页大小，默认 1000（最大）
            const pageSizeParam = parseInt(req.query.pageSize, 10)
            const pageSize = Number.isFinite(pageSizeParam) && pageSizeParam > 0 && pageSizeParam <= 1000 ? pageSizeParam : 1000

            const users = []
            let nextPageToken = undefined

            // 分页拉取所有用户
            do {
                const listResult = await admin.auth().listUsers(pageSize, nextPageToken)
                for (const u of listResult.users) {
                    users.push({
                        uid: u.uid,
                        email: u.email || null,
                        phoneNumber: u.phoneNumber || null,
                        displayName: u.displayName || null,
                        photoURL: u.photoURL || null,
                        disabled: u.disabled === true,
                        emailVerified: u.emailVerified === true,
                        providerData: (u.providerData || []).map(p => ({
                            providerId: p.providerId,
                            uid: p.uid,
                            email: p.email || null,
                            displayName: p.displayName || null,
                            phoneNumber: p.phoneNumber || null,
                            photoURL: p.photoURL || null
                        })),
                        customClaims: u.customClaims || null,
                        metadata: {
                            creationTime: u.metadata?.creationTime || null,
                            lastSignInTime: u.metadata?.lastSignInTime || null
                        }
                    })
                }
                nextPageToken = listResult.pageToken
            } while (nextPageToken)

            res.status(200).json({
                total: users.length,
                users
            })
        } catch (error) {
            console.error('获取用户失败：', error)
            res.status(500).json({ error: 'Internal Server Error' })
        }
    })
})