const { useState } = require("react")

[hide, setHide] = useState(true)

localStorage.getItem(userToken) ? setHide(true) : setHide(hide)