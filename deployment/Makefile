install-deps:
	ansible-galaxy install -r requirements.yml

deploy-all:
	ansible-playbook -i inventory main.yaml

deploy-test:
	ansible-playbook -i inventory main.yaml --limit test

deploy-prod:
	ansible-playbook -i inventory main.yaml --limit prod
