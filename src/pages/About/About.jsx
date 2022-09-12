import React from 'react';
import { Button, Card } from 'react-bootstrap';

const About = () => {
  const [user, setUser] = React.useState({
    name: 'saikat',
    desc: 'Lorem ipsum dolor sit amet, consectetur.',
    roll: 9

  });
  const [getFromData, setFromData] = React.useState({});

  const getData = (e) => {
    // console.log(e);
    setFromData({ ...getFromData, [e.target.name]: e.target.value.trim() })
  }

  const handleSubmit = () => {
    console.log(getFromData);
    setUser(getFromData)
  }

  return (
    <div className='container'>
      <h1>this is about</h1>
      <div className='userInput pb-3' style={{ maxWidth: '400px' }}>
        <label htmlFor="name" className='d-flex flex-column'>

          Name:
          <input id="name" name="name" type="text"  placeholder='enter name' onChange={(e) => getData(e)} />
        </label>
        <label htmlFor="name" className='d-flex flex-column'>

                    Description:
                    <textarea id="desc" name="desc" type="text" placeholder='Enter desc' onChange={(e) => getData(e)} />
                </label>

                <label htmlFor="name" className='d-flex flex-column'>
                    Roll:
                    <input id="roll" name="roll" type="number" placeholder='Enter roll' onChange={(e) => getData(e)} />
                </label>
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
            <Card style={{ width: '18rem' }}>
                <Card.Body className='text-dark'>
                    <Card.Title>Name: {user?.name}</Card.Title>
                    <Card.Text>
                        Comment: {user.desc}
                    </Card.Text>
                    <Button variant="primary">Roll: {user.roll}</Button>
                </Card.Body>
            </Card>
        
      </div>
  );
}

export default About;
