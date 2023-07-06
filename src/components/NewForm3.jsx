import React, { useState } from 'react'
import {Button, Form, Input, Select, Space} from 'antd'
import { useForm } from 'antd/es/form/Form'
const NumericInput = (props) => {
    const { value, onChange } = props;
    const handleChange = (e) => {
      const { value: inputValue } = e.target;
      const reg = /^-?\d*(\.\d*)?$/;
      if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
        onChange(inputValue);
      }
    };

}
const NewForm3 = () => {
    const [form] = useForm()

    const [phoneNumber,setPhoneNumber] = useState()
    const provinceData = ['India', 'USA','France'];
    const cityData = {
        India: [91],
        USA: [1],
        France : [33]
    };

    const graduationDegreeOptions = [
        {
            label:'MCA',
            value : 'MCA'
        },
        {
            label:'BCA',
            value : 'BCA'
        },
        {
            label:'MBA',
            value : 'MBA'
        },
        {
            label:'Diploma',
            value : 'Diploma'
        },

    ]
    const [cities, setCities] = useState(cityData[provinceData[0]]);
    const onFinish = (values)=>{
        console.log(values)
    }
    const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const handleSecondCityChange = (value) => {

    console.log(value)
    
    console.log(value)
    setSecondCity(value.target.value)
  };


  const handlePhoneNumber=(value)=>{
    const handleChange = (e) => {
        const { value: inputValue } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
          onChange(inputValue);
        }
      };
    setPhoneNumber(value.target.value)
  }
  
  return (
    <Form layout='vertical'
    form={form}
    onFinish={onFinish}
    >
        <Form.Item label="Name" 
        name='name'
         rules={[
            {
              required: true,
            },
          ]}
        required>
            <Input type='text'  />
        </Form.Item>
        <Form.Item label="Phone Number" 
        required
        >
            <Space align='center'>
            <Form.Item >
                
            <Select
        defaultValue={provinceData[0]}
        style={{
          width: 120,
        }}
        onChange={handleProvinceChange}
        options={provinceData.map((province) => ({
          label: province,
          value: province,
        }))}
      />
            </Form.Item>
        <Form.Item 
     
     rules={[
       {
         required: true,
       },
     ]}
     name='phoneNumberItself'
     >

<Input
       style={{
         width: 120,
       }}
       
       maxLength={10}
      
         name='numberitself'
       addonBefore={'+'+secondCity}
       value = {phoneNumber}
       
       onChange={handlePhoneNumber}
       
       options={cities.map((city) => ({
           label: city,
           value: city,
       }))}
       
       />
       </Form.Item>
            </Space>
      
        </Form.Item>
        <Form.Item label='graduation degree' rules={[
       {
         required: true,
       },
     ]} name='graduationDegree'>
        <Select defaultValue={"Please select degree"} options={graduationDegreeOptions}/>
        </Form.Item>

   

        <Form.Item >
            <Button htmlType='submit' >
                Submit
            </Button>
        </Form.Item>
    </Form>
  )
}

export default NewForm3