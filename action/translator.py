import argparse
import glob
import re
import traceback

import deepl


def translate_by_deepl(authentication_key: str, text: str, target_language: str) -> str:
    """Translate a text into one in the target_language.
    The reference of deepl api is https://www.deepl.com/docs-api/translate-text/translate-text/.

    :param str authentication_key: authentication key
    :param str text: target text
    :param str target_language: target language, which is
    :return str: translated text
    """
    translator = deepl.Translator(authentication_key)
    result = translator.translate_text(text, target_lang=target_language)
    return result.text


def translate_by_deepl_into_japanese(authentication_key: str, text: str) -> str:
    """Translate s text into one in Japanese.

    :param str authentication_key: authentication key
    :param str text: target text
    :return str: translated text, which is in Japanese
    """
    target_language = "JA"
    return translate_by_deepl(
        authentication_key=authentication_key,
        text=text,
        target_language=target_language,
    )


def read_file(input_path: str, encoding: str = "utf-8") -> str:
    """Read a file.

    :param str input_path: path to input file
    :param str encoding: encoding method, defaults to "utf-8"
    :return str: read text
    """
    with open(input_path, mode="r", encoding=encoding) as input_file:
        text = input_file.read()
    return text


def write_text_to_file(text: str, output_path: str, encoding: str = "utf-8") -> bool:
    """Write a text into a file.

    :param str text: text
    :param str output_path: path to output file
    :param str encoding: encoding method, defaluts to utf-8
    :return bool: whether this method works well or not
    """
    try:
        with open(output_path, mode="w", encoding=encoding) as output_file:
            output_file.write(text)
        return True
    except:
        traceback.print_exc()
        return False


def create_japanese_doc(
    authentication_key: str, input_path: str, output_path: str, encoding: str = "utf-8"
) -> bool:
    """Translate a text into Japanese and write it to a file.

    :param str authentication_key: _description_
    :param str input_path: _description_
    :param str output_path: _description_
    :param str encoding: _description_, defaults to "utf-8"
    :return bool: whether this function works well or not
    """
    try:
        input_text = read_file(input_path)
        translated_text = translate_by_deepl_into_japanese(
            authentication_key=authentication_key, text=input_text
        )
        ret = write_text_to_file(
            text=translated_text, output_path=output_path, encoding=encoding
        )

        return ret
    except:
        traceback.print_exc()
        return False


def main(authentication_key: str, encoding: str = "utf-8") -> None:
    """Create Japanese documents corresponding to all Engilish documents in the document directory.

    :param str authentication_key: _description_
    :param str encoding: _description_, defaults to "utf-8"
    """
    # Get all document names in the document directory.
    all_document_names = glob.glob("./document/*")

    # Create representations being looked for and substituted to.
    complied_target_sequence = re.compile(r"_en")
    new_sequence = r"_jp"

    for document_name in all_document_names:
        # Create a Japanese document if the document name contains the representation
        if complied_target_sequence.search(document_name):
            # Get a new document name, which is a version of Japanese.
            new_document_name = complied_target_sequence.sub(
                new_sequence, document_name
            )
            ret = create_japanese_doc(
                authentication_key=authentication_key,
                input_path=document_name,
                output_path=new_document_name,
                encoding=encoding,
            )

            if not ret:
                print(f"Something went wrong whilst {document_name} was processing.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Create Japanese documents corresponding to all English document in the document directory."
    )

    parser.add_argument("authentication_key", help="Authentication key for deepl API")
    parser.add_argument("--encoding", help="Encoding method", default="utf-8")

    args = parser.parse_args()

    main(authentication_key=args.authentication_key, encoding=args.encoding):

