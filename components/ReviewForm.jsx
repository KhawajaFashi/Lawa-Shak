'use client'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

export default function ReviewForm() {
    const router = useRouter()
    const [form, setForm] = useState({
        name: '',
        rating: '',
        comments: '',
        profilePhoto: null,
    })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [hoveredStar, setHoveredStar] = useState(null)

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (name === 'profilePhoto') {
            setForm((prev) => ({ ...prev, profilePhoto: files[0] }))
        } else {
            setForm((prev) => ({ ...prev, [name]: value }))
        }
    }

    const validate = () => {
        const newErrors = {}
        if (!form.name.trim()) newErrors.name = 'Name is required.'
        if (!form.rating) newErrors.rating = 'Rating is required.'
        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validate()
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            const formData = new FormData()
            
            formData.append('name', form.name)
            formData.append('rating', form.rating)
            formData.append('comments', form.comments)
            if (form.profilePhoto) {
                formData.append('profilePhoto', form.profilePhoto)
            }
            console.log('Submitting review:', form)
            try {
                const res = await fetch('/api/review', {
                    method: 'POST',
                    body: formData
                })
                if (res.ok) setSubmitted(true)
                else alert('Failed to save review!')
            } catch (err) {
                alert('Failed to save review!')
            }
        }
    }

    if (submitted) {
        router.push('/');
        return (
            <div className="text-green-400 text-lg font-semibold text-center py-10">Thank you for your review!</div>
        )
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {/* <div className="grid md:grid-cols-2 gap-4"> */}
            <div>
                <label className="block mb-2 text-white">NAME <span className="text-orange-500">*</span></label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                {/* </div> */}
            </div>
            <div>
                <label className="block mb-2 text-white">COMMENTS</label>
                <textarea
                    name="comments"
                    value={form.comments}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share your experience..."
                    className="input-field"
                />
            </div>
            <div className='flex items-center gap-9'>
                <label className="text-white mt-1">RATING <span className="text-orange-500">*</span></label>
                <div className="flex items-center gap-4 py-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            type="button"
                            key={star}
                            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                            onClick={() => setForm((prev) => ({ ...prev, rating: star }))}
                            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setForm((prev) => ({ ...prev, rating: star })) }}
                            onMouseEnter={() => setHoveredStar(star)}
                            onMouseLeave={() => setHoveredStar(null)}
                            tabIndex={0}
                            className="focus:outline-none"
                        >
                            <FaStar
                                size={28}
                                className={
                                    (hoveredStar ? star <= hoveredStar : star <= (form.rating || 0))
                                        ? 'text-orange-500 drop-shadow'
                                        : 'text-white/10'
                                }
                            />
                        </button>
                    ))}
                </div>
                {errors.rating && <p className="text-red-400 text-sm mt-1">{errors.rating}</p>}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <label className="flex items-center gap-2 cursor-pointer bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-white hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all">PROFILE PHOTO

                    <input type="file"
                        name="profilePhoto"
                        accept="image/*"
                        onChange={handleChange}
                        className="hidden"
                    />
                </label>
                {form.profilePhoto && (
                    <div className="mt-2">
                        <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{form.profilePhoto.name}</span>
                    </div>
                )}
                {/* </div> */}
            </div>
            <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded text-lg font-medium transition-colors hover:bg-orange-600"
            >
                Submit Review
            </button>
        </form>
    )
}
