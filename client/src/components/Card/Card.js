import React from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import SaveBtn from '../../components/SaveBtn';
import {Input, FormBtn} from '../../components/Form';

const Card = props => (
    <div style={{clear: "both" }} className="card container-fluid">
        <img className="card-img-top" src={props.image} alt={props.title} />
        <div className='card-body'>
            <h5 className='card-title'>{props.title}</h5>
            <span>{props.date}</span>
            <p className='card-text'>
                {props.teaser}
            </p>
            <a href={props.link} className='card-link'>Read more</a>
            {props.article === 'saved' ?
                <div className="container-fluid">
                    <DeleteBtn  handleDelete={props.handleDelete} id={props.id} />
                    <div className="row">
                        <form>
                        <Input name="note" onChange= {props.onChange} value={props.note} />
                        <FormBtn onClick={(event) => props.handleNewNote(props.id, event)} id={props.id}>Save Note</FormBtn>
                        </form>
                        {props.savedNotes.map( (x,i) => {
                            return(
                            <div key={i} className="panel">
                                <div className="panel-body">
                                    <label>{x.note}</label> <br />
                                    <label>by {x.date}</label>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
                :
                <SaveBtn handleSubmit={props.handleSubmit} id={props.id}  />
            }
        </div>
    </div>
);

export default Card;
