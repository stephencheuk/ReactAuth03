
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

import './Projects.css';
import ProjDetails from './ProjDetails';

const Projects = () => {

  const [proj, setProj] = useState([]);
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);

//  const classes = {};
//  const values = {};

//  const handleChange = () => {};

  const history = useHistory();

  useEffect(()=>{
    setProj([
      { id:1, name: 'My 1st Project' },
      { id:2, name: 'My 2nd Project' },
      { id:3, name: 'My 3rd Project' }
    ]);
  }, []);

  return (
    <div className="ProjRoot">
      <div className="ProjList">
        <div className="ProjList__Title">
          <div className="ProjList__Title__Icon"><HomeIcon /></div><div className="ProjList__Title__Text">Main Workspace</div>
        </div>
        <div className="ProjList__Action">
          <div className="ProjList__Icon"><AddIcon /></div>
          <div className="ProjList__Icon__Text">Add</div>
        </div>
        <div className={ clsx("ProjList__Search", search && "Searching", focus && "Searching") }>
          <div className="ProjList__Icon"><SearchIcon /></div>
          <div className="ProjList__Search__Input"><input placeholder="Search Project" value={search} onChange={(e)=>setSearch(e.target.value)} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} /></div>
        </div>
        <div className="ProdList__Divider"><Divider /></div>
        {
          proj
            .filter((obj)=>obj.name.toLowerCase().indexOf(search.toLowerCase()) >= 0)
            .map((p) => (
              <div className="Project" onClick={ e => history.push(`/Projects/${p.id}`) }>
                <div className="ProjList__Icon"><ViewListRoundedIcon /></div>
                <div className="ProjList__Icon__Text">{p.name}</div>
              </div>
            ))
        }
      </div>
      <div className="ProjContent">
        <ProjDetails />
      </div>
    </div>
  );
}

export default Projects;