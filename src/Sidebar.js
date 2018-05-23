import React from 'react'
import {StyleSheet,css} from 'aphrodite'
import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'


const Sidebar = ()=>{
    return(
        <nav className={css(styles.sidebar)}
        >
          <div className={css(styles.logo)}
          >
            <img src={quill} alt="Noteherder"
            className = {css(styles.logoImg)}
            />
          </div>
          <a className="new-note" href="/notes"
          >
            <img src={newHover} alt="New note"
                className = {css(styles.buttonImg)}
             />
            <img className="outline" src={this.state.src} alt="New note"
               className = {
                   css(styles.buttonImg,styles.buttonImgHover)
               }
            />
          </a>
          <div className="SignOut"
            className={css(styles.signOut)}
          >
            <button
            className = {css(styles.signOutButton)}
            >
              <i className="fa fa-sign-out"
              className = {`fa fa-sign-out ${css(styles.signOutButtonFa)}`}
              ></i>
            </button>
          </div>
        </nav>
    );
}

const mouseEvent = {
    onMouseOver:  '<img src={newHover} alt="New note" style = {styles.buttonImgHover}/>'
}
const styles = StyleSheet({
    sidebar:{
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo:{
        fontFamily: '"Fauna One"',
        color: '#666',
        fontSize: '3rem',
    },
    logoImg:{
        width: '3rem',
        paddingLeft: '0.4rem',
    },
    newNote:{
        marginTop: '2rem',
        position:'relative',
        width: '4rem',
    },
    button:{
        backgroundColor: 'transparent',
        border:'0',
        color:'#008BF8',
        cursor: 'pointer',
    },
    buttonImg:{
        position: 'absolute',
        left:'0',
        height: '3rem',
        width:'3rem',
        transition:'opacity 0.25s ease-in-out',
    },
    buttonImgHover:{
        ':hover':{
        opacity:'0',
        }
    },
    signOut:{
        position: 'absolute',
        bottom: '1rem',
    },
    signOutButton:{
        outline: 'none',
    },
    signOutButtonFa:{
        fontSize:'2rem',
    }

})
export default Sidebar