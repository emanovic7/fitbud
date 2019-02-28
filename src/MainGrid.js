import React, { Component } from 'react';
import {Grid, Segment, Divider} from 'semantic-ui-react';
import ExerciseInput from './components/Exercises/ExerciseInput'
import ExercisesContainer from './components/Exercises/ExercisesContainer'
import Muscles from './components/muscles/muscles';
import Category from './components/categories/category';


const MainGrid = () => (
  <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment><ExerciseInput /></Segment>
        <Segment>
          <h4>Exercises</h4>
          <ExercisesContainer />
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment><Muscles /></Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment><Category /></Segment>
      </Grid.Column>

    </Grid.Row>

  </Grid>
)


export default MainGrid;
