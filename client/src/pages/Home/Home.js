import React, {Component} from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import { Input, TextArea, FormBtn, DropDownList} from "../../components/Form";

class Home extends Component {
    state = {
        article :[],
        title: "",
        date: "",
        teaser: "",
        startYear: "",
        endYear: ""
    }; 
    handleForSearch = event =>{
        event.preventDefault();
        console.log("in handleforsearch");
        console.log("title: " + this.state.title);
        console.log("startYear: " + this.state.startYear);
        console.log("endYear: " + this.state.endYear);
        API.getNews(this.state.title, this.state.startYear, this.state.endYear).then( res => {
            console.log("articles", res.data.response.docs);
            this.setState({article : res.data.response.docs});
            
        });
            
    };
    handleChange = (event) => {
        const {name, value} = event.target;
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({ [name] : value});
        console.log(this.state);
    };
    
    render(){
        return(
        <div>
            <h1>Homepage</h1>
            <Jumbotron>
                <h1>NYT News React</h1>
            </Jumbotron>
            <form>
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
                    <FormBtn onClick={this.handleForSearch}>Search</FormBtn>
                <FormBtn>Clear Results</FormBtn>
            </form>
            {this.state.article.map(item => 
                <Card 
                    key={item.headline.print_headline} 
                    title={item.headline.print_headline} 
                    date={item.pub_date} 
                    teaser={item.snippet} 
                    link={item.web_url} 
                    /> 
            )}

        </div>
    )};
};

export default Home;
