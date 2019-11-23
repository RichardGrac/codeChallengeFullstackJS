const app = require('../../index')
const supertest = require('supertest')
const request = supertest(app)

app.set('port', process.env.PORT || 3003)

describe('Test suite for Lists', () => {
    it('Getting all lists returns Status 200', async (done) => {
        const res = await request.get('/api/lists')
        expect(res.status).toBe(200)
        done()
    })

    it('Getting all lists', async (done) => {
        const res = await request.get('/api/lists')
        expect(res.body.message).toBe('Lists retrieved successfully')
        expect(Array.isArray(res.body.data)).toBe(true)
        done()
    })

    it('Should post a new list', async (done) => {
        let data = {
            'name': 'the list name'
        }

        const res = await request
            .post('/api/lists')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200 || 201)
            .end((err) => {
                if (err) return done(err);
                done();
            });

    })
})
