

export default function PinService(){
    
    const [pinArray, setPinArray] = useState([])

    const [lowOpacity, setLowOpacity] = useState(false)

    const inputStyle = [styles.inputCirle, lowOpacity && {opacity: .4}]

    const addPin = (num) => {

        if(pinArray.length === 4) return
        
        if(pinArray.length === 3){
            setLowOpacity(true)
        }

        setPinArray(pinArray.concat(num))

    }

    const emptyPin = () => {
        setPinArray([])
        setLowOpacity(false)
    }

    const deletePin = () => {
        setPinArray(pinArray.slice(0, -1))
        setLowOpacity(false)
    }

    const handleButton = () => {
        
        if(!lowOpacity) return

        if(mode === "Create Pin"){
            navigation.navigate("ConfirmPin")
            emptyPin()
        }

    }
    
}