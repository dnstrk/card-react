import { Component } from 'react'
import axios from "axios";

export default class UserService extends Component {
  static async getAll() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        return response.data
    } catch (e) {
        console.log(e)
    }

    
  }
}
