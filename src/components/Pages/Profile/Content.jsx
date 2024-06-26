import React from 'react'
// import DetailPost from '../../Modal/DetailPost'
import { Link, useLocation } from 'react-router-dom'

const Content = ({ posts, nick }) => {
    const location = useLocation();
    return (
        <>
            <div className='py-6 w-full justify-center flex'>
                {posts.length === 0 ? <div className='grid max-w-[60rem] minmd:px-24'><img src={require('../../../assets/image/noposts.png')} alt="no posts" /></div> : <div className='grid grid-cols-3 gap-1 sm:gap-0.5 max-w-[60rem]'>
                    {posts.map((posts, Index) => (
                        // <DetailPost key={Index} img={posts.post_image} nick={nick} caption={posts.post_captions} id={posts.post_id}>
                        <Link to={`/p/${posts.post_id}`} state={{ background: location }}>
                            <div className='aspect-square'>
                                <img src={posts.post_image} alt="content" className="w-full h-full object-cover" />
                            </div>
                        </Link>
                        //</DetailPost>
                    ))}
                </div>}
            </div>
        </>
    )
}

export default Content