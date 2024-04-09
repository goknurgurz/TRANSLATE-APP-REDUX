import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { options } from '../../constant';

export const getLanguages = createAsyncThunk(
  'translate/getLanguages',
  async () => {
    const res = await axios.request(options);

    return res.data.data.languages;
  }
);

export const translateText = createAsyncThunk(
  'translate/text',
  async ({ text, sourceLang, targetLang }) => {
    const params = new URLSearchParams();
    params.set('source_language', sourceLang.value);
    params.set('target_language', targetLang.value);
    params.set('text', text);

    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key':
          '554b5c9a03msh4a008333f18e61ap1fb405jsnbaa4227abd20',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
      },
      data: params,
    };

    const res = await axios.request(options);

    return res.data.data.translatedText;
  }
);
