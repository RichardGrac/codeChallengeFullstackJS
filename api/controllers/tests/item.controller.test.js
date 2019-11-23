const app = require('../../index')
const supertest = require('supertest')
const request = supertest(app)

app.set('port', process.env.PORT || 3002)

describe('Test suite for Items', () => {
    it('Getting all items returns Status 200', async (done) => {
        const res = await request.get('/api/items')
        expect(res.status).toBe(200)
        done()
    })

    it('Getting all items', async (done) => {
        const res = await request.get('/api/items')
        expect(res.body.message).toBe('Items retrieved successfully')
        expect(Array.isArray(res.body.data)).toBe(true)
        done()
    })
})
