import React from 'react';
import Header from '../../components/Header/Header';
import './post.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const validationPost = yup.object.shape({
  title: yup.string().required("O titulo é obrigatorio").max(40, 'O titulo deve ter no máximo 40 caracteres'),
  description: yup.string().required("A descrição é obrigatorio").max(150, 'A descrição dever ter no máximo 150 caracteres'),
  content: yup.string().required("O conteúdo é obrigatório").max(500, 'O conteúdo deve ter no máximo 500 caracteres')
})

export default function post() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let navigate = useNavigate()


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
  })

  const addPost = data => axios.post("https://upload-my-api.herokuapp.com/post/create", data)
    .then(() => {
      console.log('Ok');
      navigate.push('/')
    })
    .catch(() => {
      console.log('Error');
    })

  return (
    <div>
      <Header />

      <main>
        <div className='card-post'>
          <h1>Criar postagem</h1>
          <div className='line-post'></div>

          <div className='card-body-post'>
            <form onSubmit={handleSubmit(addPost)}>
              <div className='fields'>
                <label>Titulo</label>
                <input type="text" name='title' {...register('title')} />
                <p className='error-message'>{errors.title?.message}</p>
              </div>
              <div className='fields'>
                <label>Descrição</label>
                <input type="text" name='description' {...register('description')} />
                <p className='error-message'>{errors.description?.message}</p>
              </div>
              <div className='fields'>
                <label>Conteúdo</label>
                <textarea name='content' {...register('content')} />
                <p className='error-message'>{errors.content?.message}</p>
              </div>
              <div className='btn-post'>
                <button type='submit'>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
