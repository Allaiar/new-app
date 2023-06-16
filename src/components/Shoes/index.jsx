import React, {useEffect} from 'react';
import Spinner from '../Spinner';
import {getShoes} from '../../redux/shoes/shoesSlice'
import { useDispatch, useSelector } from 'react-redux';
import ShoesItem from '../ShoesItem/index';
const Shoes = () => {

    const dispatch = useDispatch()
    const {shoes, isLoading} = useSelector(state => state.shoes)
    console.log(shoes)
    useEffect(() => {
        dispatch(getShoes())
    },[dispatch])

    if(isLoading) {
        return <Spinner/>
    }

    return (
        <div className='flex py-6 px-10 container mx-auto flex-wrap justify-center gap-y-6 max-w-3xl'>
            {
             shoes && shoes.map(el => <ShoesItem key={el.id} subtext={el.subtext} title={el.title} img={el.img}/>)
            }
        </div>
    );
};

export default Shoes;