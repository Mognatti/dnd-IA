import { useEffect, useState } from "react";
import * as S from "./styles";
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap";

interface Data {
  index: number;
  name: string;
  url: string;
}

interface Spell {
  index: string;
  name: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string;
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attak_type: string;
  damage?: {
    damage_type?: { name: string; url: string };
    damage_at_slot_level?: {
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };
  };
  school: { name: string; url: string };
  classes: { name: string; url: string }[];
  subclasses: { name: string; url: string }[];
  url: string;
}

export default function Spells() {
  const [allSpells, setAllSpells] = useState<Data[]>([]);
  const [selectedSpell, setSelectedSpell] = useState<Spell>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://www.dnd5eapi.co/api/spells");
        const data = await res.json();
        if (res) {
          setAllSpells(data.results);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  async function handleClick(url: string) {
    setIsLoading(true);
    try {
      const response = await fetch(`https://www.dnd5eapi.co${url}`);
      const data: Spell = await response.json();
      if (response) {
        setSelectedSpell(data);
        setShowModal(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  return (
    <div>
      <S.SpellList>
        {allSpells.map((item) => (
          <S.Item key={item.index}>
            <S.ItemName onClick={() => handleClick(item.url)}>
              {item.name}
            </S.ItemName>
          </S.Item>
        ))}
      </S.SpellList>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSpell?.name}</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <div>Level: {selectedSpell?.level}</div>
          <div>
            Classes:{" "}
            {selectedSpell?.classes.map((item) => (
              <span key={item.name}> {item.name} |</span>
            ))}
          </div>
          <div>{selectedSpell?.desc}</div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setShowModal(false)}>Close</Button>
          <Button onClick={() => setShowModal(false)}>Save</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
