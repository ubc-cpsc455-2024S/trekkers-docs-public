import { useEffect, useState } from 'react';
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
} from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';
import axios from 'axios';

interface RowData {
  id: string;
  requirement: string;
  type: string;
  priority: string;
  status: string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}


const controlStyle = {
  width: '100%',
  padding: `var(--mantine-spacing-xs) var(--mantine-spacing-md)`,
  backgroundColor: 'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: 'none',
  outline: 'none',
};

const iconStyle = {
  width: rem(21),
  height: rem(21),
  borderRadius: rem(21),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function Th({ children, reversed, sorted, onSort, width }) {

  const thStyle = {
    padding: 0,
    paddingLeft: 10,
    width: width,
  };


  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <Table.Th style={thStyle}>
      <UnstyledButton onClick={onSort} style={controlStyle}>
        <span>{children}</span>
        <Center style={iconStyle}>
          <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        </Center>
      </UnstyledButton>
    </Table.Th>
  );
}
function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    Object.keys(item).some((key) =>
      item[key] && typeof item[key] === 'string' && item[key].toLowerCase().includes(query)
    )
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

// - ✅ Fully completed
// - 🧪 Testing in progress
// - 🚧 Development in progress
// - ✏️ Planning and implementation in progress
function statusToEmoji(status: string) {
  switch (status) {
    case 'Fully Completed':
      return '✅';
    case 'Testing':
      return '🧪';
    case 'Development':
      return '🚧';
    case 'Planning':
      return '✏️';
    default:
      return status;
  }
}



export function TableSort() {
  const [search, setSearch] = useState('');
  const [response, setResponse] = useState<any>();
  const [data, setData] = useState<RowData[]>([]);
  const [sortedData, setSortedData] = useState<RowData[] | null>(null);
  const [rows, setRows] = useState([]);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1FgupV4KfaGh-5jSfGgZi5fMjS1QW2_Y8gzqulQ5Rojc/values/Requirements!A:F?key=AIzaSyD_yMeEvQQ1KORnRhQ6nxiG_iFJakziq1M`);
        console.log("got response");
        setResponse(response.data.values);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {

    if (response) {

      const data = response.slice(1)
        .filter((row: string[]) => row.length > 0)
        .map((row: string[]) => {

          return {
            id: row[0] || '',
            requirement: row[1] || '',
            type: row[2] || '',
            priority: row[3] || '',
            status: row[4] || '',
          };
        });
      setData(data);
    }

  }, [response]);


  useEffect(() => {

    // if sorting never happened
    if (sortedData === null) {
      setRows(data.map((row) => (
        <Table.Tr key={row.id}>
          <Table.Td><b>{row.id}</b></Table.Td>
          <Table.Td>{row.requirement}</Table.Td>
          <Table.Td>{row.type}</Table.Td>
          <Table.Td>{row.priority}</Table.Td>
          <Table.Td>{statusToEmoji(row.status)}</Table.Td>
        </Table.Tr>
      )));
    } else {
      setRows(sortedData.map((row) => (
        <Table.Tr key={row.id}>
          <Table.Td><b>{row.id}</b></Table.Td>
          <Table.Td>{row.requirement}</Table.Td>
          <Table.Td>{row.type}</Table.Td>
          <Table.Td>{row.priority}</Table.Td>
          <Table.Td>{statusToEmoji(row.status)}</Table.Td>
        </Table.Tr>
      )));
    }

  }, [data, sortedData]);


  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
  };



  const inputWrapperStyle: React.CSSProperties = {
    position: 'relative',
    marginBottom: '1rem',
    width: '100%',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: `0.5rem 1rem 0.5rem 2.5rem`,
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  const iconStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '0.75rem',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
  };

  return (
    // <ScrollArea>
    <>
      <div style={inputWrapperStyle}>
        <IconSearch style={{ ...iconStyle, width: rem(16), height: rem(16) }} stroke={1.5} />
        <input
          type="text"
          placeholder="Search Requirements"
          value={search}
          onChange={handleSearchChange}
          style={inputStyle}
        />
      </div>
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
        <Table.Tbody>
          <Table.Tr>
            <Th
              sorted={sortBy === 'id'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('id')}
              width={"7.5%"}
            >
              <b>
                ID
              </b>
            </Th>
            <Th
              sorted={sortBy === 'requirement'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('requirement')}
              width={"60%"}
            >
              <b>
                Requirement
              </b>
            </Th>
            <Th
              sorted={sortBy === 'type'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('type')}
              width={"15%"}
            >
              <b>
                Type
              </b>
            </Th>
            <Th
              sorted={sortBy === 'priority'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('priority')}
              width={"10%"}
            >
              <b>
                Priority
              </b>
            </Th>
            <Th
              sorted={sortBy === 'status'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('status')}
              width={"7.5%"}
            >
              <b>
                Status
              </b>
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows && rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={6} >
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </>

    // </ScrollArea>
  );
}