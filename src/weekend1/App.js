import React from 'react';
import Dog from './component/Dogs';



class App extends React.Component {
    state = {
        happy: 0,
        sad: 0,
        pic: ''
    };

    componentDidMount = () => {
        this.changePic();
    }

    changePic = async () => {
        const response = await Dog.get('/random');
        this.setState({ pic: response.data.message });
    };
    
    onClickHappy = () => {
        this.setState((prev) => ({ happy: prev.happy + 1 }))
        this.changePic();

    };

    onClickSad = () => {
        this.setState((prev) => ({ sad: prev.sad + 1 }));
        this.changePic();

    };


    render() {
        return (
            <div >
                < div className='happy'>
                    😍
                    <br></br>
                    {this.state.happy}
                </div>
                < div className='sad'>
                    😒
                    <br></br>
                    {this.state.sad}
                </div>
                <div className='pic'>
                    <img src={this.state.pic} />
                </div>
                <div className='like'>
                    <button onClick={this.onClickHappy}>
                        👍
                    </button>
                </div>
                <div className='dislike'>
                    <button onClick={this.onClickSad}>
                        👎
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
