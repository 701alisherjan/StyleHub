import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language } from '../utils/translations';

interface LanguageState {
  currentLanguage: Language;
  darkMode: boolean;
}

const initialState: LanguageState = {
  currentLanguage: 'en',
  darkMode: false
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    }
  }
});

export const { setLanguage, toggleDarkMode } = languageSlice.actions;
export default languageSlice.reducer;