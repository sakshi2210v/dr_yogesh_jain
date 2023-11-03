"use client";
import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  useInView,
} from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    "title": "Excellent Care, Friendly Staff!",
    "body": "Dr. Yogesh Jain and his team provide excellent service. They are friendly and ensure patients are well-informed about their health. Highly recommend!",
    "rating": 5
  },
  {
    "title": "Compassionate and Knowledgeable",
    "body": "Dr. Yogesh Jain is a great doctor! He's understanding, listens to concerns, and takes time to help with health issues. Highly recommended specialist!",
    "rating": 5
  },
  {
    "title": "Trustworthy and Professional",
    "body": "Dr. Yogesh Jain is extremely professional, taking time to listen and explain. A first-rate experience. Completely satisfied with him and the support staff.",
    "rating": 5
  },
  {
    "title": "The Best Doctor Ever!",
    "body": "Dr. Yogesh Jain and the team are beyond amazing. They spend quality time with patients, addressing all concerns. I never feel rushed. Truly awesome!",
    "rating": 5
  },
  {
    "title": "Delightful Experience with Dr. Jain",
    "body": "My first visit with Dr. Yogesh Jain was delightful. She made me feel comfortable instantly. I'm grateful to have found a trustworthy primary care physician.",
    "rating": 5
  },
  {
    "title": "Caring and Committed",
    "body": "Dr. Yogesh Jain is a dedicated professional who genuinely cares about his patients. I feel I'm in good hands and confident in his commitment to my health.",
    "rating": 5
  },
  {
    "title": "Thorough and Concerned",
    "body": "Dr. Yogesh Jain provides thorough examinations and shows genuine concern during every visit. I've had nothing but great encounters with him.",
    "rating": 5
  },
  {
    "title": "Top-Notch Medical Provider",
    "body": "Dr. Yogesh Jain is our favorite medical provider. Always friendly, thoughtful, and puts our concerns first. The staff is also very helpful.",
    "rating": 5
  },
  {
    "title": "Trustworthy and Welcoming",
    "body": "Dr. Yogesh Jain and her staff are awesome! They listen and provide the best advice. I finally found a doctor I can trust and connect with.",
    "rating": 5
  },
  {
    "title": "Expertise and Empathy Combined",
    "body": "Dr. Yogesh Jain combines expertise with empathy. He takes time to explain and ensures patients receive expert medical care. Highly recommended!",
    "rating": 5
  },
  {
    "title": "Outstanding Doctor and Staff",
    "body": "Dr. Yogesh Jain is exceptional, providing thorough and compassionate care. The staff is friendly and efficient, making each visit a positive experience.",
    "rating": 5
  },
  {
    "title": "A True Life Saver",
    "body": "Dr. Yogesh Jain saved my life with his prompt diagnosis and treatment. Forever grateful for his expertise and caring approach.",
    "rating": 5
  },
  {
    "title": "Expert Diagnosis and Treatment",
    "body": "Dr. Yogesh Jain's diagnostic skills are unmatched. He accurately diagnosed my condition and provided effective treatment. Highly recommended for his expertise!",
    "rating": 5
  },
  {
    "title": "Compassionate Listener",
    "body": "Dr. Yogesh Jain is not only a skilled doctor but also an empathetic listener. He genuinely cares for his patients' well-being and concerns.",
    "rating": 5
  },
  {
    "title": "Trustworthy and Reliable",
    "body": "I trust Dr. Yogesh Jain completely with my health. He's reliable, knowledgeable, and always there to address any health issues.",
    "rating": 5
  },
  {
    "title": "Exceptional Bedside Manner",
    "body": "Dr. Yogesh Jain has a wonderful bedside manner. He makes patients feel at ease and explains everything with clarity and patience.",
    "rating": 5
  },
  {
    "title": "Dedicated and Attentive",
    "body": "Dr. Yogesh Jain is dedicated to his patients' health and well-being. He pays attention to every detail and provides personalized care.",
    "rating": 5
  },
  {
    "title": "Highly Skilled Surgeon",
    "body": "Dr. Yogesh Jain performed a successful surgery on me. His expertise and surgical skills are remarkable. Grateful for his care!",
    "rating": 5
  },
  {
    "title": "Caring and Supportive Team",
    "body": "Dr. Yogesh Jain and his team are caring and supportive throughout the treatment journey. They go the extra mile for their patients.",
    "rating": 5
  },
  {
    "title": "Efficient and Effective Care",
    "body": "Dr. Yogesh Jain provides efficient and effective care. He values his patients' time and ensures quick and accurate diagnosis and treatment.",
    "rating": 5
  },
  {
    "title": "A Doctor Who Truly Cares",
    "body": "Dr. Yogesh Jain's genuine care for his patients shines through. He goes above and beyond to ensure their well-being.",
    "rating": 5
  },
  {
    "title": "Holistic Approach to Health",
    "body": "Dr. Yogesh Jain takes a holistic approach to health, considering all aspects of well-being. I appreciate his comprehensive care.",
    "rating": 5
  },
  {
    "title": "Knowledgeable and Informative",
    "body": "Dr. Yogesh Jain is highly knowledgeable and explains medical conditions in an easy-to-understand manner. A doctor you can trust.",
    "rating": 5
  },
  {
    "title": "Always Available for Patients",
    "body": "Dr. Yogesh Jain is always accessible to his patients. He promptly responds to queries and provides support even outside of appointments.",
    "rating": 5
  },
  {
    "title": "Empowering Patients for Better Health",
    "body": "Dr. Yogesh Jain empowers his patients to take charge of their health. He educates and encourages lifestyle changes for better well-being.",
    "rating": 5
  },
  {
    "title": "Reliable and Professional Staff",
    "body": "The staff at Dr. Yogesh Jain's clinic is professional and reliable. They make the entire experience smooth and pleasant.",
    "rating": 5
  },
  {
    "title": "A Doctor Who Listens",
    "body": "Dr. Yogesh Jain actively listens to his patients' concerns and involves them in the decision-making process. A rare find in today's healthcare.",
    "rating": 5
  },
  {
    "title": "A Doctor with a Heart",
    "body": "Dr. Yogesh Jain treats patients with kindness and compassion. His caring nature makes a significant difference in the healing process.",
    "rating": 5
  },
  {
    "title": "Exceptional Follow-Up Care",
    "body": "Dr. Yogesh Jain provides exceptional follow-up care, ensuring patients recover well and stay on track with their treatment plans.",
    "rating": 5
  },
  {
    "title": "A Doctor You Can Trust",
    "body": "Dr. Yogesh Jain is a doctor you can trust wholeheartedly. His expertise, caring demeanor, and dedication to patients make him stand out.",
    "rating": 5
  }
]






  

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-8 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

 function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-10 sm:pb-24 sm:pt-20"
    >
      <Container>
      <div className="bg-green-100 shadow-sm  border border-green-300 rounded-full mx-auto px-4 py-2 max-w-[240px]">
        <p className="text-lg  font-semibold text-green-600 text-center">
       Reviews
        </p>
      </div>
        <p className="md:text-3xl text-2xl px-2 font-semibold text-center mt-4">Trusted Care: <span className='text-secondary'>Our Patients Testimonials</span></p>

        <ReviewGrid />
      </Container>
    </section>
  )
}
export default Reviews;