import { timeout } from 'q';
import React,{useEffect} from 'react';
import { render } from 'react-dom';


const styles = {
  display: 'flex',
  
  flexDirection: 'column',
  fontFamily: 'sans-serif',
};

const inputStyles={
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '10px'
};

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vals: []
    }
    this._refs = {};
  }

  onChange = () => {
    this.setState({
      vals: Object.keys(this._refs).map(key => this._refs[key] && this._refs[key].value)
      
     });
   
  }
  
  onClickButton=()=>{
    setTimeout(() => {
      
      alert(`${this.state.vals[1]}, Ваш текст оптравлен`)
    }, 1000);
 
    
  }




  render() {
    return (
      <div style={styles}>
        {/* AllVals: {this.state.vals.join(', ')} */}
        <div style={styles} ><Text _ref={ref => this._refs['a'] = ref} onChange={this.onChange} />Текст</div>
        <div style={inputStyles}><Name _ref={ref => this._refs[''] = ref} onChange={this.onChange} />Имя</div>
   
        <button onClick={this.onClickButton}  >Отправить сообщение</button>

      </div>
    )
  }
};
const Text = ({_ref, onChange}) => (
  <input ref={_ref} onChange={onChange} type="text" />
);

const Name = ({ _ref,  onChange }) => (
  <input ref={_ref} onChange={onChange} type="text" />
);







function App(){
  return (
    <div>
    <MessageList
    />
    </div>

  )
};
export default App;
