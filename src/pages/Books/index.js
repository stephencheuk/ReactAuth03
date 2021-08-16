
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  Home as HomeIcon,
    Search as SearchIcon,
//    Add as AddIcon,
    AddCircleOutlineRounded as AddIcon,
    ViewListRounded as ViewListRoundedIcon,
} from '@material-ui/icons';

import {
  Divider,
//  FormControl,
//  InputLabel,
//  OutlinedInput,
//  InputAdornment,
//  TextField,
} from '@material-ui/core';

import { useHistory } from "react-router-dom"; 

import './Books.css';
import BookDetails from './BookDetails';
import demo_data from './demo_data';


const Books = () => {

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);

  console.log('demo_data', demo_data);

//  const classes = {};
//  const values = {};

//  const handleChange = () => {};

  const history = useHistory();

  useEffect(()=>{
    //[
    //  { id:1, name: 'My 1st Project' },
    //  { id:2, name: 'My 2nd Project' },
    //  { id:3, name: 'My 3rd Project' },
    //  { id:4, name: 'My 4th Project' },
    //  { id:5, name: 'My 5th Project' },
    //  { id:6, name: 'My 6th Project' },
    //  { id:7, name: 'My 7th Project' },
    //  { id:8, name: 'My 8th Project' },
    //  { id:9, name: 'My 9cth Project' },
    //  { id:10, name: 'My 10th Project' },
    //  { id:11, name: 'My 11th Project' },
    //  { id:12, name: 'My 12th Project' },
    //  { id:13, name: 'My 13th Project' },
    //  { id:14, name: 'My 14th Project' },
    //  { id:15, name: 'My 15th Project' },
    //  { id:16, name: 'My 16th Project' },
    //  { id:17, name: 'My 17th Project' },
    //  { id:18, name: 'My 18th Project' },
    //  { id:19, name: 'My 19th Project' },
    //  { id:20, name: 'My 20th Project' }
    //]
     setBooks(demo_data.items);
  }, []);

  return (
    <div className="BookRoot">
      <div className="BookSearch">
        <div className="BookList__Title">
          <div className="BookList__Title__Icon"><HomeIcon /></div><div className="BookList__Title__Text">Books</div>
        </div>
        <div className={ clsx("BookList__Search", search && "Searching", focus && "Searching") }>
          <div className="BookList__Search__Input"><input placeholder="Search Books" value={search} onChange={(e)=>setSearch(e.target.value)} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} /></div>
          <div className="BookList__Search__Icon"><SearchIcon /></div>
        </div>

      </div>
      <div className="BookSpace">
        <div className="BookList">
          <div className="BookList__Operation">
            <div className="BookList__Title">
              <div className="BookList__Title__Icon"><HomeIcon /></div><div className="BookList__Title__Text">Main Workspace</div>
            </div>
            <div className="BookList__Action">
              <div className="BookList__Icon"><AddIcon /></div>
              <div className="BookList__Icon__Text">Add</div>
            </div>
            <div className={ clsx("BookList__Search", search && "Searching", focus && "Searching") }>
              <div className="BookList__Icon"><SearchIcon /></div>
              <div className="BookList__Search__Input"><input placeholder="Search Books" value={search} onChange={(e)=>setSearch(e.target.value)} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} /></div>
            </div>
            <div className="BookList__Divider"><Divider /></div>
          </div>
          {
            books
              .filter((obj)=>obj.volumeInfo.title.toLowerCase().indexOf(search.toLowerCase()) >= 0)
              .map((p) => (
                <div className="Book" onClick={ e => history.push(`/Books/${p.id}`) }>
                  <div className="Book__Img"><img src={p.volumeInfo?.imageLinks?.smallThumbnail} alt={p.volumeInfo?.title} /></div>
                  <div className="Book__Title">{p.volumeInfo?.title}</div>
                </div>
              ))
          }
        </div>
        <div className="BookContent">
          <BookDetails />
        </div>
      </div>
    </div>
  );
}

export default Books;