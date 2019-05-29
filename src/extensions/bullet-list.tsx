import * as React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faList, faOutdent, faIndent } from '@fortawesome/fontawesome-free-solid'
import { wrapInList, liftListItem, sinkListItem, splitListItem } from 'prosemirror-schema-list'
import { Extension } from '../types';
import { blockActive } from '../utils';
import Button from '../components/button';

export default class BulletList implements Extension {
  get name() {
    return 'bullet_list';
  }
  get showMenu() {
    return true;
  }
  get schema() {
    return {
      content: 'list_item+',
      group: 'block',
      parseDOM: [{tag: "ul"}],
      toDOM() { return ["ul", 0] }
    }
  }
  get icon() {
    return <FontAwesomeIcon icon={faList} />
  }
  active(state) {
    return blockActive(state.schema.nodes.bullet_list)(state)
  }
  enable(state) {
    return wrapInList(state.schema.nodes.bullet_list)(state);
  }
  onClick (state, dispatch) {
    wrapInList(state.schema.nodes.bullet_list)(state, dispatch);
  }
  customMenu({ state, dispatch }) {

    return (<><Button onClick={() => {
      liftListItem(state.schema.nodes.list_item)(state, dispatch);
    }}><FontAwesomeIcon icon={faOutdent} /></Button>
    <Button onClick={() => {
      sinkListItem(state.schema.nodes.list_item)(state, dispatch);
    }}><FontAwesomeIcon icon={faIndent} /></Button>
    </>)
  }
}