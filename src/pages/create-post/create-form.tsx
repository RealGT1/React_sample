import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { title } from 'process';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

interface CreateFormData {
    title: string;
    description: string;

}

export function CreateForm() {
    const [user] = useAuthState(auth);
    const navigate=useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title..."),
        description: yup.string().required("You must add a description...").min(4).max(100),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    })

    const postsRef = collection(db, "posts")

    const onCreatePost = async (data: CreateFormData) => {
        await addDoc(postsRef, {
            title: data.title,
            description: data.description,
            username: user?.displayName,
            userId: user?.uid,
        })
        navigate("/")
    }
    return (
        <form onSubmit={handleSubmit(onCreatePost)} className='form'>
            <input placeholder='Title...'{...register("title")} />
            <p>{errors.title?.message}</p>
            <textarea placeholder='Desciption...' {...register("description")} />
            <p>{errors.description?.message}</p>
            <input  type='submit' className='submitButton' />
        </form>
    )
}

