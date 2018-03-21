import React, {Component} from "react";
import API from "../../utils/API";
import MsgCenter from "../../components/msgCenter";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import { Input, FormBtn, DropDownList} from "../../components/Form";

class Home extends Component {
    state = {
        article :[],
        saved: [],
        _id: "",
        title: "",
        date: "",
        teaser: "",
        note : "",
        startYear: "",
        endYear: "",
        message : "",
    }; 
    handleForSearch = event =>{
        event.preventDefault();
        if(!this.state.title) {
            console.log("title cannot be empty");
        }
        if(!this.state.endYear){
            console.log("end year is empty");
        }
        if(!this.state.startYear){
            console.log("start year is empty)");
        }
        if (this.state.title) {
            API.getNews(this.state.title, this.state.startYear, this.state.endYear).then( res => {
            console.log("articles", res.data.response.docs);
            this.setState({ article: res.data.response.docs });
            });             
        }else{
            this.setState({message : "Title cannot be empty"});
        }
        /* const obj = {
            title : this.state.title,
            startYear : this.state.startYear,
            endYear : this.state.endYear
        }
        API.getNews2(obj).then( res => {
            console.log("success with second option!");
            console.log(res);
            this.setState({article: res.data.response.docs});
        })
        .catch(err => {
            console.log(err);
        }) */
            
    };
    componentDidMount(){
        this.loadArticle();
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({ [name] : value});
        console.log(this.state);
    };
    loadArticle = () => {
        console.log("getting articles");
        API.getArticles()
        .then( res => {
            console.log("load article", res);
            this.setState({ saved: res.data, title: "", endYear: "", startYear: "", date: "", teaser: "", message: "" });
        })
        .catch(err => console.log(err))
    };
    handleFormSubmit = id => {
       const article = this.state.article.find((item) => item._id === id);
       console.log("article found! ", article);
       const newArticle = {
           title: article.headline.main,
           date: article.pub_date,
           teaser: article.snippet,
           link : article.web_url
       }
       console.log("New article: " , newArticle);
       API.saveArticle(newArticle)
           .then(this.loadArticle());
    };
    handleDelete = id => {
        console.log("here");
        API.deleteArticle(id)
            .then(res => { 
                console.log(res);
                this.loadArticle(); })
        .catch(err => console.log(err))
    };
    handleClearResult = (event) => {
        event.preventDefault();
        this.setState({
            article : [],
            title : "",
            endYear : "",
            startYear : ""
        });
    }
    handleNewNote = (id,event) => {
        event.preventDefault();
        console.log("handling new note");
        API.saveNote(id, {
            note : this.state.note,
            date : Date().Now
        })
        .then(res =>{
            console.log(res);
            this.loadArticle();
        })
    }
    loadNote = () => {}

    render(){
        return(
        <div>
            <Jumbotron>
                
            </Jumbotron>
            {this.state.message ? <MsgCenter msg={this.state.message} className="text-center alert alert-danger" /> : ""}
            <form className="container">
                <b>Search Term:</b>
                <Input onChange={this.handleChange} name='title' value={this.state.title}>
                    
                </Input>
                <b>Number of Records to Retrieve:</b>
                <DropDownList li={[1,10,15]}></DropDownList>
                <b>Start Year (Optional):</b>
                    <Input onChange={this.handleChange} name='startYear' value={this.state.startYear}>

                </Input>
                <b>End Year (Optional):</b>
                    <Input onChange={this.handleChange} name='endYear' value={this.state.endYear}>
                </Input>
                    <FormBtn onClick={this.handleForSearch} className="btn btn-success">Search</FormBtn>
                    <FormBtn onClick={() => this.handleClearResult} className="btn btn-danger">Clear Results</FormBtn>
            </form>
            <div className="container">
                {this.state.article.length > 0? <h1>News</h1> : ""}
                {this.state.article.map(item => 
                    <Card 
                        key={item._id}
                        id={item._id}
                        title={item.headline.main} 
                        h1="News"
                        article = 'new'
                        date={item.pub_date} 
                        teaser={item.snippet} 
                        link={item.web_url} 
                        handleSubmit = {this.handleFormSubmit}
                        /> 
                )}
                {this.state.saved.length > 0 ? <h1>Saved Articles</h1> : ""}
                {this.state.saved.map(item =>
                    <Card
                        key={item._id}
                        id={item._id}
                        article = 'saved'
                        h1="Saved Articles"
                        title={item.title}
                        date={item.date}
                        link = {item.link}
                        teaser= {item.teaser}
                        savedNotes = {item.note}
                        onChange = {this.handleChange}
                        handleNewNote = {this.handleNewNote}
                        handleDelete={this.handleDelete} />

                )}
            </div>
        </div>
    )};
};

export default Home;
