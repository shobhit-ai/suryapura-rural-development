import { useState } from 'react'
import type { FormEvent } from 'react'
import { stubPages } from '../content/pages'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'

type StubKey = keyof typeof stubPages

type StubPageProps = {
  pageKey: StubKey
}

export function StubPage({ pageKey }: StubPageProps) {
  const page = stubPages[pageKey]
  const isContact = pageKey === 'contact'
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero title={page.title} summary={page.summary} image={page.image} />
      <section className="page-body">
        <div className="container">
          <p style={{ maxWidth: '42rem' }}>{page.body}</p>

          {isContact ? (
            submitted ? (
              <p style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                धन्यवाद! आपका डेमो आवेदन दर्ज हो गया है।
              </p>
            ) : (
              <form className="contact-form" onSubmit={onSubmit}>
                <label>
                  पूरा नाम
                  <input name="name" required placeholder="अपना नाम लिखें" />
                </label>
                <label>
                  मोबाइल नंबर
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="10 अंकों का नंबर"
                  />
                </label>
                <label>
                  विषय
                  <select name="topic" defaultValue="service">
                    <option value="service">जन-सुविधा आवेदन</option>
                    <option value="complaint">शिकायत / सुझाव</option>
                    <option value="info">जानकारी</option>
                  </select>
                </label>
                <label>
                  संदेश
                  <textarea name="message" required placeholder="संक्षेप में लिखें" />
                </label>
                <Button type="submit">आवेदन भेजें</Button>
              </form>
            )
          ) : null}
        </div>
      </section>
    </>
  )
}
