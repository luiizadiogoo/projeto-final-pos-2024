const BASE_URL = 'http://localhost:8000/api';


export const api = {
  // User
  getUsers: async () => 
    fetch(`${BASE_URL}/users/`)
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao buscar Usuários: ${res.status}`);
        return res.json();
      })
      .catch(err => {
        console.error(err);
        throw err; 
      }),


  createUser: async (data) => 
    fetch(`${BASE_URL}/users/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao criar usuário: ${res.status}`);
        return res.json();
      })
      .catch(err => {
        console.error(err);
        throw err;
      }),

  updateUser: async (id, data) => 
    fetch(`${BASE_URL}/users/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao atualizar usuário: ${res.status}`);
        return res.json();
      })
      .catch(err => {
        console.error(err);
        throw err;
      }),

  deleteUser: async (id) => 
    fetch(`${BASE_URL}/users/${id}/`, {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao deletar usuário com id ${id}: ${res.status}`);
        return res.text(); 
      })
      .catch(err => {
        console.error(err);
        throw err;
      }),


    getPosts: async () => 
        fetch(`${BASE_URL}/posts/`)
          .then(res => {
            if (!res.ok) throw new Error(`Erro ao buscar Posts: ${res.status}`);
            return res.json();
          })
          .catch(err => {
            console.error(err);
            throw err; 
          }),
    
    createPost: async (data) => 
        fetch(`${BASE_URL}/posts/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then(res => {
            if (!res.ok) throw new Error(`Erro ao criar Posts: ${res.status}`);
                return res.json();
            })
            .catch(err => {
                console.error(err);
                throw err;
            }),
        
        updatePost: async (id, data) => 
            fetch(`${BASE_URL}/posts/${id}/`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            .then(res => {
                if (!res.ok) throw new Error(`Erro ao atualizar POST: ${res.status}`);
                    return res.json();
                })
                .catch(err => {
                    console.error(err);
                    throw err;
            }),

        deletePost: async (id) => 
                fetch(`${BASE_URL}/posts/${id}/`, {
                  method: 'DELETE',
                })
                  .then(res => {
                    if (!res.ok) throw new Error(`Erro ao deletar post com id ${id}: ${res.status}`);
                    return res.text(); 
                  })
                  .catch(err => {
                    console.error(err);
                    throw err;
                  }),
                  
            getComments: async () => 
                    fetch(`${BASE_URL}/comments/`)
                      .then(res => {
                        if (!res.ok) throw new Error(`Erro ao buscar Comments: ${res.status}`);
                        return res.json();
                      })
                      .catch(err => {
                        console.error(err);
                        throw err; 
                      }),
                
                createComment: async (data) => 
                    fetch(`${BASE_URL}/comments/`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data),
                    })
                    .then(res => {
                        if (!res.ok) throw new Error(`Erro ao criar esse Comment: ${res.status}`);
                            return res.json();
                        })
                        .catch(err => {
                            console.error(err);
                            throw err;
                        }),
                    
                    updateComment: async (id, data) => 
                        fetch(`${BASE_URL}/comments/${id}/`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(data),
                        })
                        .then(res => {
                            if (!res.ok) throw new Error(`Erro ao atualizar Comment: ${res.status}`);
                                return res.json();
                            })
                            .catch(err => {
                                console.error(err);
                                throw err;
                        }),
            
                    deleteComment: async (id) => 
                            fetch(`${BASE_URL}/comments/${id}/`, {
                              method: 'DELETE',
                            })
                              .then(res => {
                                if (!res.ok) throw new Error(`Erro ao deletar comment com id ${id}: ${res.status}`);
                                return res.text(); 
                              })
                              .catch(err => {
                                console.error(err);
                                throw err;
                              }),
                            
                              getAlbuns: async () => 
                                fetch(`${BASE_URL}/albums/`)
                                  .then(res => {
                                    if (!res.ok) throw new Error(`Erro ao buscar Albuns: ${res.status}`);
                                    return res.json();
                                  })
                                  .catch(err => {
                                    console.error(err);
                                    throw err; 
                                  }),
                            
                            createAlbum: async (data) => 
                                fetch(`${BASE_URL}/albums/`, {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(data),
                                })
                                .then(res => {
                                    if (!res.ok) throw new Error(`Erro ao criar esse Album: ${res.status}`);
                                        return res.json();
                                    })
                                    .catch(err => {
                                        console.error(err);
                                        throw err;
                                    }),
                                
                                updateAlbum: async (id, data) => 
                                    fetch(`${BASE_URL}/albums/${id}/`, {
                                        method: 'PUT',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(data),
                                    })
                                    .then(res => {
                                        if (!res.ok) throw new Error(`Erro ao atualizar Album: ${res.status}`);
                                            return res.json();
                                        })
                                        .catch(err => {
                                            console.error(err);
                                            throw err;
                                    }),
                        
                                deleteAlbum: async (id) => 
                                        fetch(`${BASE_URL}/albums/${id}/`, {
                                          method: 'DELETE',
                                        })
                                          .then(res => {
                                            if (!res.ok) throw new Error(`Erro ao deletar album com id ${id}: ${res.status}`);
                                            return res.text(); 
                                          })
                                          .catch(err => {
                                            console.error(err);
                                            throw err;
                                          }),
                                getPhotos: async () => 
                                            fetch(`${BASE_URL}/photos/`)
                                              .then(res => {
                                                if (!res.ok) throw new Error(`Erro ao buscar Photos: ${res.status}`);
                                                return res.json();
                                              })
                                              .catch(err => {
                                                console.error(err);
                                                throw err; 
                                              }),
                                        
                                        createPhoto: async (data) => 
                                            fetch(`${BASE_URL}/photos/`, {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify(data),
                                            })
                                            .then(res => {
                                                if (!res.ok) throw new Error(`Erro ao criar essa Photo: ${res.status}`);
                                                    return res.json();
                                                })
                                                .catch(err => {
                                                    console.error(err);
                                                    throw err;
                                                }),
                                            
                                            updatePhoto: async (id, data) => 
                                                fetch(`${BASE_URL}/photos/${id}/`, {
                                                    method: 'PUT',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify(data),
                                                })
                                                .then(res => {
                                                    if (!res.ok) throw new Error(`Erro ao atualizar Photo: ${res.status}`);
                                                        return res.json();
                                                    })
                                                    .catch(err => {
                                                        console.error(err);
                                                        throw err;
                                                }),
                                    
                                            deletePhoto: async (id) => 
                                                    fetch(`${BASE_URL}/photos/${id}/`, {
                                                      method: 'DELETE',
                                                    })
                                                      .then(res => {
                                                        if (!res.ok) throw new Error(`Erro ao deletar photo com id ${id}: ${res.status}`);
                                                        return res.text(); 
                                                      })
                                                      .catch(err => {
                                                        console.error(err);
                                                        throw err;
                                                      }),
                                                      getTodos: async () => 
                                                        fetch(`${BASE_URL}/todos/`)
                                                          .then(res => {
                                                            if (!res.ok) throw new Error(`Erro ao buscar toDos: ${res.status}`);
                                                            return res.json();
                                                          })
                                                          .catch(err => {
                                                            console.error(err);
                                                            throw err; 
                                                          }),
                                                    
                                                    createTodo: async (data) => 
                                                        fetch(`${BASE_URL}/todos/`, {
                                                            method: 'POST',
                                                            headers: { 'Content-Type': 'application/json' },
                                                            body: JSON.stringify(data),
                                                        })
                                                        .then(res => {
                                                            if (!res.ok) throw new Error(`Erro ao criar esse ToDO: ${res.status}`);
                                                                return res.json();
                                                            })
                                                            .catch(err => {
                                                                console.error(err);
                                                                throw err;
                                                            }),
                                                        
                                                        updateTodo: async (id, data) => 
                                                            fetch(`${BASE_URL}/todos/${id}/`, {
                                                                method: 'PUT',
                                                                headers: { 'Content-Type': 'application/json' },
                                                                body: JSON.stringify(data),
                                                            })
                                                            .then(res => {
                                                                if (!res.ok) throw new Error(`Erro ao atualizar ToDo: ${res.status}`);
                                                                    return res.json();
                                                                })
                                                                .catch(err => {
                                                                    console.error(err);
                                                                    throw err;
                                                            }),
                                                
                                                        deleteTodo: async (id) => 
                                                                fetch(`${BASE_URL}/todos/${id}/`, {
                                                                  method: 'DELETE',
                                                                })
                                                                  .then(res => {
                                                                    if (!res.ok) throw new Error(`Erro ao deletar ToDo com id ${id}: ${res.status}`);
                                                                    return res.text(); 
                                                                  })
                                                                  .catch(err => {
                                                                    console.error(err);
                                                                    throw err;
                                                                  })
                };