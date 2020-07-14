import React from "react";
import Select from "react-select";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";

export interface Major {
    name: string;
}

const GET_MAJORS = gql`
  {
    majors {
      name
    }
  }
`;

interface MajorSelectProps {
    onSelect: (major: string) => void;
}

function MajorSelect(props: MajorSelectProps) {
    const {onSelect} = props;
    const {loading, error, data} = useQuery(GET_MAJORS);

    if (error) {
        return <p>Oops algo deu errado :(</p>;
    }

    const options =
        data && data.majors.map((m: Major) => ({label: m.name, value: m.name}));

    return (
        <div
            style={{marginLeft: 10, maxWidth: 350, flex: "1 1 350px", zIndex: 110}}
        >
            <Select
                placeholder={"Selecione um curso..."}
                options={options}
                isSearchable={true}
                isLoading={loading}
                onChange={v => {
                    const value = v as {label: string; value: string};
                    onSelect(value.value);
                }}
                theme={theme => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary25: "var(--color-primary-300)",
                        primary50: "var(--color-primary-500)",
                        primary75: "var(--color-primary-700)",
                    }
                })}
            />
        </div>
    );
}

export default MajorSelect;
