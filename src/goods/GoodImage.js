import React from 'react';

const IMAGE_URL = 'https://murmuring-tor-81614.herokuapp.com';

export function GoodImage({ good }) {
  const { image, name } = good;
  return <img src={`${IMAGE_URL}${image}`} alt={name} />;
}
