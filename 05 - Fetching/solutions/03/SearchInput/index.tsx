import React from "react"
import styled from "styled-components"

interface SearchInputProps {
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const SearchInputStyled = styled.input.attrs({
	type: "search",
})``

const SearchInput = (props: SearchInputProps) => {
	return (
		<SearchInputStyled
			name="q"
			placeholder="Sök filmtitel..."
			onChange={props.onChange}
		/>
	)
}

export default SearchInput
