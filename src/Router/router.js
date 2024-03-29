import Vue from "vue"
import vueRouter from "vue-router"

import Movie from '../components/movie/Movie.vue'
import MovieList from '../components/movie/MovieList'
import MovieDetail from '../components/movie/MovieDetail'
import MovieDetail2 from '../components/movie/Detail2'
import Music from '../components/music/Music.vue'
import Book from '../components/book/Book'
// import Photo from '../components/photo/Photo'
import MusicList from '../components/music/MusicList'
import MusicAlbums from '../components/music/MusicAlbums'
// import PhotoList from '../components/photo/PhotoList'
import BookList from '../components/book/BookList'
import BookDetail from '../components/book/BookDetail'


const router = new vueRouter({
    mode: "history",
    routes: [{
            path: '/',
            redirect: '/movie/movieList'
        }, {
            path: '/movie',
            component: Movie,
            children: [{
                path: 'movieList',
                component: MovieList
            }, {
                path: 'movieDetail/:movieId',
                component: MovieDetail
            }, {
                path: 'movieDetail2',
                component: MovieDetail2
            }]
        }, {
            path: '/music',
            component: Music,
            redirect: '/music/musicList',
            children: [{
                path: 'musicList',
                component: MusicList
            }, {
                path: 'musicAlbums/:musicId',
                component: MusicAlbums
            }]
        }, {
            path: '/book',
            component: Book,
            redirect: '/book/bookList',
            children: [{
                path: 'bookList',
                component: BookList
            }, {
                path: 'bookDetail',
                component: BookDetail
            }]
        },
        // {
        //     path: '/photo',
        //     component: Photo,
        //     redirect: '/photo/photoList',
        //     children: [{
        //         path: 'photoList',
        //         component: PhotoList
        //     }]
        // }
    ]
})
Vue.use(vueRouter)
export default router;