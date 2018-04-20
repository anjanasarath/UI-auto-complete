import React from 'react';
import ReactDom from 'react-dom';
import DateTimePicker from 'react-datetime-picker';

export default class DateComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    date: new Date()
  };
  this.onChange = this.onChange.bind(this);
}

  onChange(value) {
    this.setState({ date: value })
  }

  render() {
   return (
     <div className="Sample">
       <header>
         <h1>react-datetime-picker sample page</h1>
       </header>
       <div className="Sample__container">
         <main className="Sample__container__content">
           <DateTimePicker
             onChange={this.onChange}
             value={this.state.date}
           />
         </main>
       </div>
     </div>
   );
  }
}
