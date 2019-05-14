import * as React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faListOl } from '@fortawesome/fontawesome-free-solid'
import { wrapInList } from 'prosemirror-schema-list'
import { Extension } from '../types';
import { blockActive } from '../util';

export default class BulletList implements Extension {
  get name() {
    return 'ordered_list';
  }
  get showMenu() {
    return true;
  }
  get schema() {
    return {
      content: 'list_item+',
      group: 'block',
      parseDOM: [{tag: "ol"}],
      toDOM() { return ["ol", 0] }
    }
  }
  get icon() {
    return <FontAwesomeIcon icon={faListOl} />
  }
  active(state) {
    return blockActive(state.schema.nodes.ordered_list)(state)
  }
  enable(state) {
    return wrapInList(state.schema.nodes.ordered_list)(state);
  }
  onClick (state, dispatch) {
    wrapInList(state.schema.nodes.ordered_list)(state, dispatch);
  }
}