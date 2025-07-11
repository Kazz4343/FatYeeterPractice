

export default function Layout(props) {
    const {children} = props;
    
    const header = (
        <header>
            <h1 className="text-gradient">Fat Yeeter</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    );
    
    const footer = (
        <footer>
            <p>Built by <a target="_blank" href="https://github.com/Kazz4343">Kazz</a><br />Style with <a target="_blank" href='https://github.com/jamezmca/full-stack-course/blob/main/1_web_portfolio/fanta.css'>FantaCSS</a></p>
        </footer>
    );
    
    return (
        <>  
            {header}
            {children}
            {footer}
        </>
    )
}