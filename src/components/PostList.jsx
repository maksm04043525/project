import React, { useState, useEffect } from 'react'

const PostList = (props)=>{

    return(
        <>
            {props.map((posts)=>
                            <div>
                                <p key={posts.id}></p>
                                <h3>{posts.title}</h3>
                                <p>{posts.body}</p>
                            </div>
                        )}
        </>
    )
}