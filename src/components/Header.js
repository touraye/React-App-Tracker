import Button from "./Button"

const Header = ( { title, onAdd, showAdd } ) => {
        const onClick = () => {
        console.log('click')
    }
    return (
        <header className='header'>
            <h1>{ title }</h1>
            <Button
                onClick={ onAdd }
                color={showAdd ? '#9f000f' : '#387c44'} text={showAdd ? 'close' : 'Add'} />            
        </header>
    )
}

export default Header
