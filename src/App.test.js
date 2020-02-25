import React from "react";
import { render, fireEvent } from "@testing-library/react";
// import App from "./App";
import ContactForm from './components/ContactForm'

test("renders App without crashing", () => {
  const { getByTestId } = render( <ContactForm /> )

  const first = getByTestId( /firstName/i )
  const last = getByTestId( /lastName/i )
  const email = getByTestId( /email/i )
  const message = getByTestId( /message/i )

  // expect( first ).toBeInTheDocument()
  expect( first ).toBeTruthy()
  expect( first ).not.toBeFalsy()

  // expect( last ).toBeInTheDocument()
  expect( last ).toBeTruthy()
  expect( last ).not.toBeFalsy()

  // expect( email ).toBeInTheDocument()
  expect( email ).toBeTruthy()
  expect( email ).not.toBeFalsy()

  // expect( message ).toBeInTheDocument()
  expect( message ).toBeTruthy()
  expect( message ).not.toBeFalsy()
});

test( 'does it do the thing?', () => {
const { getByTestId, getByText } = render( <ContactForm /> )

const firstName = getByTestId( /firstName/i )
const lastName = getByTestId( /lastName/i )
const email = getByTestId( /email/i )
const message = getByTestId( /message/i )

fireEvent.change( firstName, { target: { value: 'Tes' } } )
fireEvent.change( lastName, { target: { value: 'Test lastName' } } )
fireEvent.change( email, { target: { value: 'test@test.test' } } )
fireEvent.change( message, { target: { value: 'Test Message Test Message Test Message' } } )

expect( firstName.value ).toBe( 'Tes' )
expect( lastName.value ).toBe( 'Test lastName' )
expect( email.value ).toBe( 'test@test.test' )
expect( message.value ).toBe( 'Test Message Test Message Test Message' )

fireEvent.click( getByText( /submit/i ) )

const dougDimmadome = getByTestId( /firstName/i )
// expect( dougDimmadome ).toBeInTheDocument()
})
