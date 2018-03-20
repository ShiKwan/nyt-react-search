import React from 'react';
import Moment from 'react-moment';
import DeleteBtn from '../../components/DeleteBtn';
import SaveBtn from '../../components/SaveBtn';
import {Input, FormBtn} from '../../components/Form';

const Card = props => (
    <div style={{clear: "both" }} className="card container-fluid">
        {/*<img className="card-img-top" src={props.image} alt={props.title} /> */}
        <div className='card-body'>
            <h2 className='card-title'>{props.title}</h2>
            <span>
                Date published: 
                <Moment format="YYYY-MM-DD">
                    {props.date}
                </Moment>
            </span>
            <p className='card-text'>
                {props.teaser}
            </p>
            <a href={props.link} className='card-link'>Read more</a>
            {props.article === 'saved' ?
                <div className="container-fluid">
                    <DeleteBtn  handleDelete={props.handleDelete} id={props.id} />
                    <div className="row">
                        <div className="comment">
                            <h3>Note{props.savedNotes.length >1 ? `s` : ``}</h3>
                            {props.savedNotes.map((x, i) => {
                                return (
                                    <div key={i} className="panel">
                                        <div className="panel-body">
                                            <label>{x.note}</label> <br />
                                            <label className="text-right">Date Saved:
                                            <Moment format="YYYY-MM-DD">
                                                    {x.date}
                                                </Moment>

                                            </label>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <form>
                            <Input name="note" onChange={props.onChange} value={props.note} placeholder="write new note here.." />
                            <FormBtn onClick={(event) => props.handleNewNote(props.id, event)} id={props.id}>Save Note</FormBtn>
                        </form>
                    </div>
                </div>
                :
                <SaveBtn handleSubmit={props.handleSubmit} id={props.id}  />
            }
        </div>
    </div>
);

export default Card;
