import React from 'react';
import { shallow, mount } from 'enzyme';
import style from '../client/entrystyle.css';

import CreateList from '../client/Lists/CreateList';

describe('<CreateList />', () => {
  const formInput = {
    target: {
      value: 'test value',
    },
  };
  const handleCreateListClick = jest.fn();
  const createNewList = jest.fn();

  test('getNewListName should change newListName state', (done) => {
    const wrapper = shallow(<CreateList
      handleCreateListClick={handleCreateListClick}
      createNewList={createNewList}
    />);

    wrapper.instance().getNewListName(formInput);
    expect(wrapper.instance().state.newListName).toBe('test value');
    done();
  })

  test('Should render call handleCreateListClick when cancel button is clicked', (done) => {
    const wrapper = shallow(<CreateList
      handleCreateListClick={handleCreateListClick}
      createNewList={createNewList}
    />);

    wrapper.find('button.cancel').simulate('click');
    expect(handleCreateListClick.mock.calls.length).toBe(1);
    done();
  })

  test('Should render call handleCreateListClick when cancel button is clicked', (done) => {
    const wrapper = shallow(<CreateList
      handleCreateListClick={handleCreateListClick}
      createNewList={createNewList}
    />);
    wrapper.find('button.create').simulate('click');
    expect(createNewList.mock.calls.length).toBe(1);
    done()
  });
})
