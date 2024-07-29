import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import { SlCloudUpload } from "react-icons/sl";
import axios from 'axios';

type Props = {}

const AddBlogcom = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [success , setSuccess] = useState("")
    const [image, setImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [form, setForm] = useState({
        title: "",
        content: "",
    });

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (image) {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('title', form.title);
            formData.append('content', form.content);
            for (const [key, value] of formData.entries()) {
              console.log(key, value);
             }
            try {
                setLoading(true);
                //console.log(formData)
                const response = await axios.post('http://localhost:5000/articles/create', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Post created:', response.data);
                setLoading(false);
                setSuccess("Article published successfully")

            } catch (error) {
                console.error('Error creating article:', error);
                setLoading(false);
            }
        }
    };

    return (
        <div className='w-screen'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-row justify-center items-center'>
                    {previewImage ?
                        <div className='relative w-full flex justify-center items-center flex-col py-32 border-dashed border border-slate-900'>
                            <Image src={previewImage} alt='image' className='w-full h-full' width={300} height={600} />
                        </div>
                        :
                        <div className='relative w-full flex justify-center items-center flex-col py-32 border-dashed border border-slate-900'>
                            <SlCloudUpload className='size-20' />
                            <p className='text-xl'>Drop your images or browse them</p>
                            <input type='file' required onChange={handleImageChange} />
                        </div>
                    }

                    <div className='flex flex-col justify-center w-[80%] mr-20 px-10'>
                        <p className='my-6 text-2xl'>Add Article</p>
                        <input
                            type='text'
                            placeholder='Enter article title'
                            className='mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 w-[80%]'
                            name='title'
                            value={form.title}
                            onChange={handleFormChange} />
                        <textarea
                            placeholder='Enter article content'
                            name='content'  
                            className='mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 relative w-[80%]'
                            value={form.content}
                            onChange={handleFormChange} />
                       {success && <p className=' py-2 text-green-500'>{success}</p>}
                        <button
                            className={loading ? 'my-8 bg-zinc-500 text-white mr-20 py-3 px-4 rounded-lg w-[80%]' : "my-8 bg-zinc-900 text-white mr-20 py-3 px-4 rounded-lg w-[80%]"}
                            disabled={loading}
                            type='submit'
                        >{loading ? "Saving ..." : "Publish"}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddBlogcom;
