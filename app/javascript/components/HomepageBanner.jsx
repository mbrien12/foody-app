import React from "react";
import PropTypes from "prop-types";

import { Button, Divider, Header, Modal } from "semantic-ui-react";
import RecipeForm from "./RecipeForm";
import homepageBannerStyles from './css/homepageBanner.css'

export default class HomepageBanner extends React.Component {
  render() {
    const headerContainer = {
      display: 'flex',
      justifyContent: 'center',
      padding: '200px 200px 50px 200px'
    };
    const headerText = {
      fontSize: '80px'
    };

    const addRecipeButton = {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '100px'
    }
    return (
      <div>
        <div style={headerContainer}>
          <h1 style={headerText}>WHAT SHALL I EAT? 🤔</h1>
        </div>
        <div style={addRecipeButton}>
        <Modal trigger={<Button basic color='violet'>Add a Recipe</Button>}>
          <Modal.Content>
            <RecipeForm />
          </Modal.Content>
        </Modal>
        </div>
        <Divider />
      </div>
    );
  }
}
