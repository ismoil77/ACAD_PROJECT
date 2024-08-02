import React, { useState } from 'react';
import useDarkSide from './Hook/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
const [colorTheme, setTheme] = useDarkSide();
const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

const toggleDarkMode = checked => {
setTheme(colorTheme);
setDarkSide(checked);
};

return (
<>
<div>
<DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={56} />
</div>
</>
);
}