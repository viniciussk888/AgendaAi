import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: #63C2D1;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const TitleText = styled.Text`
  text-align:center;
  font-size: 24px;
  font-family:Sans-serif;
  font-weight:bold;
  color: #fff;
`;