import React, {useState, useCallback, useEffect} from "react";
import './ModalWindow.css'
const ModalWindow = ({show, onClose, children}) =>{
  const [isVisible, setIsVisible] = useState(false)


  const handleKeyDown = useCallback((event)=>{
    if(event.key === 'Escape'){
      onClose()
    }
  },[onClose])

  useEffect(()=>{
    if(show){
      setIsVisible(true)
      document.addEventListener('keydown', handleKeyDown)
    }else{
      const timer = setTimeout(()=> setIsVisible(false), 800)
      document.removeEventListener('keydown', handleKeyDown)
      return ()=> clearTimeout(timer)
    }
  }, [show, handleKeyDown]);


  useEffect(()=>{
    return ()=>{
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
  return (
    <div className={`modal-backdrop ${show ? 'show' : ''}`}
    style={{display: isVisible}} onClick={onClose}>
      <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-button" aria-label="Clsoe modal"></button>
        {children}
        <div style={{display:"flex"}}>
          <a className="social telegram" target="_blank" href="https://t.me/romanov_t">Telegram</a>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow;