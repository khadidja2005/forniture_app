import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import { SlCloudUpload } from "react-icons/sl";
import axios from 'axios';

type Props = {}

const AddPro = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [success , setSuccess] = useState("")
    const [image, setImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        quantity: "",
    });

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (image) {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('name', form.name);
            formData.append('description', form.description);
            formData.append('price', form.price);
            formData.append('category', form.category);
            formData.append('quantity', form.quantity);
            for (const [key, value] of formData.entries()) {
              console.log(key, value);
             }
            try {
                setLoading(true);
                //console.log(formData)
                const response = await axios.post('http://localhost:5000/post/create', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Post created:', response.data);
                setLoading(false);
                setSuccess("product published successfully")

            } catch (error) {
                console.error('Error creating post:', error);
                setLoading(false);
            }
        }
    };

    return (
        <div className='w-screen'>
            <form onSubmit={handleSubmit}>
                <div className='flex md:flex-row flex-col justify-center items-center'>
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

                    <div className='flex flex-col justify-center sm:w-[80%] w-full sm:mr-20 sm:px-10 px-2'>
                        <p className='my-6 text-2xl'>Add Product</p>
                        <input
                            type='text'
                            placeholder='Enter product name'
                            className='mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 w-[80%]'
                            name='name'
                            value={form.name}
                            onChange={handleFormChange} />
                        <input
                            type="text"
                            placeholder='Description'
                            name='description'
                            className='mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 relative w-[80%]'
                            value={form.description}
                            onChange={handleFormChange} />
                        <input
                            type="number"
                            placeholder='Price'
                            name='price'
                            className='mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 relative w-[80%]'
                            value={form.price}
                            onChange={handleFormChange} />
                        <div className='flex'>
                            <select
                                name='category'
                                className='mr-5 py-3 px-4 my-4 rounded-lg bg-gray-100 w-full'
                                value={form.category}
                                onChange={handleFormChange}
                            >
                                <option value="">Select Category</option>
                                <option value="Living Room">Living Room</option>
                                <option value="Bedroom">Bedroom</option>
                                <option value="Kitchen">Kitchen</option>
                            </select>

                            <input
                                type="number"
                                placeholder='Quantity'
                                name='quantity'
                                className='mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 w-[80%]'
                                value={form.quantity}
                                onChange={handleFormChange}
                            />
                        </div>
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

export default AddPro;
