import axios from "axios";

export default interface Empleo{
        _id:string,
        title: string,
        description: string,
        location: string,
        createdAt: string,
        updatedAt:string,
        __v:string
      }