import OpenAI from 'openai';
import { OPENAI_URL } from './constants';
const openai = new OpenAI({
    apiKey: OPENAI_URL, // This is the default and can be omitted
    dangerouslyAllowBrowser:true,
  });
  export default openai;