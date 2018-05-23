import React from 'react'
import './NoteList.css'
class NoteList extends React.Component{
    constructor(){
        super()
        this.state={
            lists: []
        }
    }
    render(){
    return (
        <div className="NoteList"
        style={styles.noteList}
        >
          <h3
          style={styles.noteListH3}
          >
              Notes
        </h3>
          <ul id="notes"
          style = {styles.noteListUL}>
            <a className="active"
            style={styles.noteListA}>
              <li
              style={styles.noteListLi}>
                <div className="note"
                style={styles.noteListNote}>
                  <div className="note-title"
                  style={styles.noteListTitle}>
                    Kohlrabi welsh
                  </div>
                  <div className="note-body"
                  style={styles.noteListBody}>
                    <p>
                      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                    </p>
                  </div>
                </div>
              </li>
            </a>
            <a style={styles.noteListA}>
              <li style={styles.noteListLi}>
                <div className="note"
                style={styles.noteListNote}>
                  <div className="note-title"
                  style={styles.noteListTitle}>
                    Dandelion cucumber
                  </div>
                  <div className="note-body"
                  style={styles.noteListBody}>
                    <p>
                      Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
                    </p>
                  </div>
                </div>
              </li>
            </a>
            <a style={styles.noteListA}>
              <li style={styles.noteListLi}>
                <div className="note"
                style={styles.noteListNote}>
                  <div className="note-title"
                  style={styles.noteListTitle}>
                    Prairie turnip
                  </div>
                  <div className="note-body"
                  style={styles.noteListBody}>
                    <p>
                      Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                  </div>
                </div>
              </li>
            </a>
          </ul>
        </div>
    )
}
}

const styles={
    //style the notelist
    noteList: {
        borderLeft: '1px solid #eee',
        borderRight: '1px solid #eee',
        width: '30rem',
    },
    noteListH3:{
        color: '#999',
        textTransform: 'uppercase',
        fontSize: '2rem',
        fontFamily: 'Oxygen',
        fontWeight: '300',
        letterSpacing: '0.3rem',
        margin: '2rem 2rem',
    },
    noteListUL:{
        borderTop: '0.1rem solid #eee',
        overflowY: 'scroll',
        height: 'calc(100vh - 72px)',
        listStyle: 'none',
        marginTop: '1em',
        padding: '0',
        width: '100%',
        color: '#999',
    },
    noteListA:{
        color: 'inherit',
        textDecoration: 'none',
        WebkitTransition: 'background-color .1s ease-in-out, color .1s ease-in-out',
        OTransition: 'background-color .1s ease-in-out, color .1s ease-in-out',
        transition: 'background-color .1s ease-in-out, color .1s ease-in-out',
        borderTop: 'none',
    },
    noteListLi:{
        height: '10rem',
        fontSize: '90%',
        cursor: 'pointer',
        overflow: 'hidden',
        borderTop: '0.1rem solid #eee',
        margin: '0 2rem',
        padding: '1rem 0.4rem',
    },
    noteListUlHover:{
        backgroundColor: '#008bf8',
        color: '#fff!important',
        textDecoration: 'none !important',
        borderColor: 'transparent',
    },////// come back to here
    noteListTitle:{
        color: '#4a4a4a',
        fontFamily: '"Fauna One"',
        fontSize: '120%',
        fontWeight: '400',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        OTextOverflow: 'ellipsis',
        textOverflow: 'ellipsis',
    },
    noteListNote:{
        borderTop: '0.1rem solid #eee',
        margin: '0 2rem',
        padding: '1rem 4px',
        display: 'block',
        height: '10rem',
        padding: '1em',
        textDecoration: 'none',
    },
    noteListBody:{
        height: '5.4rem',
        overflow: 'hidden',
        marginTop: '.5rem',
        fontSize: '1em!important',
        margin: '0!important',
        padding: '0!important',
        color: '#999!important',
        background: 'none',
        border: 'none',
    }
    
}

export default NoteList